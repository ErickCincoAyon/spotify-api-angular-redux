import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MusicState } from 'src/app/pages/store/music.state';
import { getArtistsByName } from '../../../../pages/store/actions/music.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter();

  public searchForm = this._fb.group({
    search: ['', [ Validators.required ]],
  });
  public searchByKey!: boolean;

  public modelChanged: Subject<string> = new Subject<string>();
  public subscription!: Subscription;
  public debounceTime: number = 800;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _store: Store<MusicState>,
  ) { }

  ngOnInit(): void {

    this._route.queryParams.subscribe(({ search } )=> {
        this.searchByKey = ( search ) ? true : false;
        ( search ) && this._store.dispatch( getArtistsByName({ artist: search }));
    });

    this.subscription = this.modelChanged.pipe(
        debounceTime(this.debounceTime),
    ).subscribe(( value ) => {
        this.searchArtist( value );
    });

  }

  searchArtist( artist: string ): void {
    this._router.navigate(['/artistas'], { queryParams: { search: artist }});
  }

  search(): void {
    this.searchByKey = true;
    this._router.navigate(['/artistas'], { queryParams: this.searchForm.getRawValue() });
  }

  searchMovil(): void {
    this.searchByKey = true;
    this.closeSidebar.emit( false );
    this._router.navigate(['/artistas'], { queryParams: this.searchForm.getRawValue() });
  }

  searchTypping( event: any ): void {
    ( this.searchByKey ) && this.modelChanged.next( event.target.value.trim() );
  }

  ngOnDestroy(): void {
    this.searchByKey = false;
  }

}
