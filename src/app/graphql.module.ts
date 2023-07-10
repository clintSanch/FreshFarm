import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, from } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';


const errorLink = onError(({ graphQLErrors, networkError, response }) => {

  /**
   * Errors to be Handled( errors--5xx, 4xx)
   * Bad Gateway Error,
   * Internal Server Error
   * Suspended User Response/Error
   * Unavailable in the Country Response/Error
   * Deleted User Response
   * Blocked User Response
   * 
   */

  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL Error]: Message: ${message}, Locations: ${JSON.stringify(locations)}, Path: ${path}, Response: ${response}`)
    });
  }

  if (networkError) {
    console.log(`[Network Error]: ${networkError.name}, Message: ${networkError.message}, Stack: ${networkError.stack}, Response: ${response}`)
  }
});




@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {

        return {
          cache: new InMemoryCache({
            typePolicies: {
              User: {
                keyFields: ['firstname', 'email']
              }
            }
          }),
          link: from([httpLink.create({ uri: 'http://localhost:5000/api/graphqlAPI/' }),
            errorLink
          ])
        }
      },
    },
  ],
})

export class GraphQLModule { }
