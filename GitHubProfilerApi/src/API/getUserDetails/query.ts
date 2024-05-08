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
        id: 1,
        login: 1,
        name: 1,
        location: 1,
        bio: 1,
        repositories: {
          $map: {
            input: "$Repositories",
            as: "repo",
            in: {
              name: "$$repo.name",
              visibility: "$$repo.visibility",
            },
          },
        },
      },
    },
  ]);
};
