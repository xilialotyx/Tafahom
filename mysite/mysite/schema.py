import graphene
import graphql_jwt
from users.schema import Query as userQuery, Mutation as userMutation
from datetime import datetime
from .settings import GRAPHQL_JWT


def jwt_payload(user, context=None):
    username = user.get_username()
    # prefix = user.get_prefix()
    payload = {
        'id': user.id,
        user.USERNAME_FIELD: username,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'exp': datetime.utcnow() + GRAPHQL_JWT['JWT_EXPIRATION_DELTA'],
    }

    return payload


class Querys(userQuery, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutations(userMutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Querys, mutation=Mutations)
