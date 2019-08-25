/* eslint-disable no-tabs */
import {
  ApolloServer,
  gql,
} from 'apollo-server';

import schemas from './utils/schemas';

schemas().then((res) => {

  console.log(res)

})

console.log(schemas, 'schemas');

const port = 3000;
class Api {
  constructor() {
    this.main();
  }

  main() {
    // const app = express();
    const rootSchema = gql`
    type User {
      firstName: String!
      email: String!
      role: Int!
    }

		type Query {
			user: User
    }
    schema {
      query: Query
    }
		`;

    // Provide resolver functions for your schema fields
    const resolvers = {
      Query: {
        user: () => ({ name: 'nois' }),
      },
    };
    const server = new ApolloServer({
      typeDefs: [rootSchema],
      resolvers,
      query: { ...resolvers.Query },
    });


    server.listen(port).then(({ url }) => {
      console.log(`🚀 ta rodando na ${url}`);
    });
  }
}

export default new Api();
