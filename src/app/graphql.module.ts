import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, from } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';


const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {

  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL Error]: Message: ${message}, Locations: ${locations}, Path: ${path}`)
    });
  }

  if (networkError) {
    console.log(`[Network Error]: ${networkError}`)
  }
});




@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {

        return {
          cache: new InMemoryCache(),
          link: from([httpLink.create({ uri: 'http://localhost:5000/api/graphql' }),
          errorLink
          ])
        }
      },
    },
  ],
})

export class GraphQLModule { }
