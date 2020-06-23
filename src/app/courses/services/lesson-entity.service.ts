import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Injectable } from "@angular/core";
import { Lesson } from "../model/lesson";

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super("Lesson", serviceElementsFactory);
  }
}
