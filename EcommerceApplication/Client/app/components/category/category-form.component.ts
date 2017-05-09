import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { HttpCommonService } from '../shared/services/http-common.service';

@Component({
  //moduleId: module.id,
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})

export class CategoryFormComponent implements OnInit, OnDestroy {
    public apiName: string
    protected model = {};
    protected submitted = false;
    private sub: any;
    id: number;

     constructor(private _httpCommonService: HttpCommonService,
        private flashMessagesService: FlashMessagesService,
        private route: ActivatedRoute) {
        this.apiName = "admin/categoryNG";
        this.sub = route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                _httpCommonService.getItem(this.apiName + "/get", this.id).subscribe(
                    data => {
                        this.model = data;
                    },
                    err => {
                        this.showError(err);
                    });
            }

        });

    ngOnInit() {
    }
    
      
    ngOnDestroy() {
    }

}
