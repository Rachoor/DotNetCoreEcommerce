import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { HttpCommonService } from '../../shared/services/http-common.service';


@Component({
    //moduleId: module.id,
    selector: 'app-category-form',
    templateUrl: 'category-form.component.html',
    styleUrls: ['category-form.component.css']
})
export class CategoryFormComponent {
    //public strDate:string  = "2010-10-25";
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
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                _httpCommonService.getItem(this.apiName + "/get", this.id).subscribe(
                    data => {
                        this.model = data;
                    },
                    err => {
                        // Log errors if any
                        //  console.log(err);
                        this.showError(err);
                    });
            }

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    reset() {
        this.id = 0;
        this.model = {};
    }
    save() {
        if (this.id > 0) {
            this._httpCommonService.update(this.apiName + "/update", this.model).subscribe(
                data => {
                    this.showSuccess("updated");
                },
                err => {
                    // Log errors if any
                    //  console.log(err);
                    this.showError(err);
                });
        }
        else {
            this._httpCommonService.create(this.apiName + "/create", this.model).subscribe(
                data => {
                    //// Emit list event
                    //EmitterService.get(this.listId).emit(comments);
                    //// Empty model
                    //this.model = new Comment(new Date(), '', '');
                    //// Switch editing status
                    //if (this.editing) this.editing = !this.editing;
                    this.showSuccess("created");
                },
                err => {
                    // Log errors if any
                    //  console.log(err);
                    this.showError(err);
                });
        }



    }
    showError(err: any) {
        this.flashMessagesService.show(err, { cssClass: 'alert-danger' });//{ cssClass: 'alert-success', timeout: 1000 }
        //this.flashMessagesService.grayOut(true);
        this.submitted = false;
    }

    showSuccess(msg: any) {
        this.flashMessagesService.show(msg, { cssClass: 'alert-success' });//{ cssClass: 'alert-success', timeout: 1000 }
        //this.flashMessagesService.grayOut(true);
        this.submitted = true;
    }
    delete() {
        this._httpCommonService.delete(this.apiName + "/delete", this.model["id"]).subscribe(
            data => {
                this.showSuccess("deleted");
            },
            err => {
                // Log errors if any
                //  console.log(err);
                this.showError(err);
            });;
    }




}

