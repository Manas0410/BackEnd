import UserModel from "../../Schemas/userDataSchema";

export const runMongoQuery = async (userName: string) => {
  return UserModel.aggregate([
    {
      $match: {
        login: userName,
      },
    },
    {
      $lookup: {
        from: "repos",
        localField: "login",
        foreignField: "owner.login",
        as: "Repositories",
      },
    },
    {
      $project: {
        _id: 0,
        "Repositories.id": 1,
        "Repositories.name": 1,
        "Repositories.full_name": 1,
        "Repositories.private": 1,
        "Repositories.owner.login": 1,
        "Repositories.owner.id": 1,
        "Repositories.description": 1,
        "Repositories.visibility": 1,
      },
    },
  ]);
};
