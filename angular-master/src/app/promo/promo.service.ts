import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const createPromo = gql`
  mutation ($promo: PromoInput) {
    CreatePromo(promo_input: $promo) {
      _id
      ref
      title
      sub_title
      description
      image_url
    }
  }
`;
@Injectable({
  providedIn: 'root',
})
export class PromoService {
  constructor(private apollo: Apollo) {}

  getPromo(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          GetAllPromos(pagination: { page: 0, limit: 20 }) {
            _id
            title
            image_url
            ref
            sub_title
            description
          }
        }
      `,
    });
  }

  addPromo(promo): Observable<any> {
    return this.apollo.mutate({
      mutation: createPromo,
      variables: {
        promo,
      },
    });
  }
}
