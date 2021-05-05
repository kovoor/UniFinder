import Uni from "../data/models/Uni";

export const resolvers = {
  Query: {
    filterUnis: (_parent, _args, _context, _info) => {
      const uni = Uni.find({
        name: new RegExp(".*" + _args.name + ".*", "i"),
      });
      return uni;
    },
    findUni: (_parent, _args, _context, _info) =>
      Uni.find({
        name: new RegExp(".*" + _args.name + ".*", "i"),
      }),
  },
};
