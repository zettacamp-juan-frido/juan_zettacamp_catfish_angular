import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  constructor(private apollo: Apollo) {}

  getPromo(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          GetAllPromos(pagination: { limit: 10, page: 0 }) {
            _id
            title
            image_url
            ref
            description
          }
        }
      `,
    });
  }
}
