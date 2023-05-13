import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from . import models


class AlertType(DjangoObjectType):
    class Meta:
        model = models.Alert


class BadgeType(DjangoObjectType):
    class Meta:
        model = models.Badge

# Create a GraphQL type for the user model


class UserType(DjangoObjectType):
    alerts = graphene.List(AlertType)
    badges = graphene.List(BadgeType)

    class Meta:
        model = models.User

    def resolve_alerts(self, info):
        return models.Alert.objects.filter(user_id=self.id, isView=False)

    def resolve_badges(self, info):
        return models.Badge.objects.filter(user_id=self.id)




# Create a Query type
class Query(ObjectType):
    user = graphene.Field(UserType, id=graphene.Int())
    users = graphene.List(UserType)
    alert = graphene.Field(AlertType, id=graphene.Int())
    alerts = graphene.List(AlertType, user_id=graphene.Int())
    badge = graphene.Field(BadgeType, id=graphene.Int())
    badges = graphene.List(BadgeType, user_id=graphene.Int())

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return models.User.objects.get(pk=id)

        return None

    def resolve_users(self, info, **kwargs):
        return models.User.objects.all()



    def resolve_alert(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return models.Alert.objects.get(pk=id)

        return None

    def resolve_alerts(self, info, **kwargs):
        user_id = kwargs.get('user_id')
        if user_id is not None:
            return models.Alert.objects.filter(userId=user_id, isView=False)
        return None

    def resolve_badge(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return models.Badge.objects.get(pk=id)

        return None

    def resolve_badges(self, info, **kwargs):
        user_id = kwargs.get('user_id')
        if user_id is not None:
            return models.Badge.objects.filter(userId=user_id)
        return None



class UserInput(graphene.InputObjectType):
    userName = graphene.String(required=True)
    password = graphene.String(required=True)


class UserUpdateInput(graphene.InputObjectType):
    firstName = graphene.String(required=True)
    lastName = graphene.String(required=True)
    title = graphene.String(required=True)

# Create mutations for users


class CreateUser(graphene.Mutation):
    class Arguments:
        input = UserInput(required=True)

    user = graphene.Field(UserType)

    @staticmethod
    def mutate(root, info, input=None):

        user_instance = models.User(
            userName=input.userName,
        )
        user_instance.set_password(input.password)
        user_instance.save()

        return CreateUser(user=user_instance)


class UpdateUser(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = UserUpdateInput(required=True)

    user = graphene.Field(UserType)
    success = graphene.Boolean()
    message = graphene.String()

    @staticmethod
    def mutate(root, info, id, input=None):
        user = info.context.user

        if (user.is_superuser or user.is_staff) or (user.id == id):
            user_instance = models.User.objects.get(pk=id)
            if user_instance:
                for item in input:
                    user_instance[item] = input[item]
                user_instance.save()
                success = True
                return UpdateUser(user=user_instance, success=success)
            else:
                success = False
                mes = "User Not Found!!!!"
                return UpdateUser(user=None, success=success, message=mes)
        else:
            success = False
            mes = "You must be staff or a superuser to view all gardens"
            return UpdateUser(user=None, success=success, message=mes)




class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    update_user = UpdateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
