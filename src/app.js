/* eslint-disable no-tabs */
import {
  ApolloServer,
  gql,
} from 'apollo-server';

const port = 3000;
class Api {
  constructor() {
    this.main();
  }

  main() {
    // const app = express();
    const rootSchema = gql`
    type Hello {
      name: String
    }
		type Query {
			"A simple type for getting started!"
			hello: Hello
    }
    schema {
      query: Query
    }
		`;

    // Provide resolver functions for your schema fields
    const resolvers = {
      Query: {
        hello: () => ({ name: 'nois' }),
      },
    };
    const server = new ApolloServer({
      typeDefs: [rootSchema],
      resolvers,
      // endpoint: 'teste',
      // query: { ...resolvers.Query },
      // playground: {
      //   settings: {
      //     'editor.theme': 'dark',
      //   },
      //   tabs: [
      //     {
      //       endpoint: 'graphql',
      //       query: { ...resolvers.Query },
      //     },
      //   ],
      // },
    });


    server.listen(port, () => {
      console.log(
      `Example app listening on port ${port}!`); // eslint-disable-line
    });
  }
}

export default new Api();
