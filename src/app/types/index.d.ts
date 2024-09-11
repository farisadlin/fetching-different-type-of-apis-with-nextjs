export interface ResultProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsVariableProps {
  options: {
    paginate: {
      page: number;
      limit: number;
    };
  };
}
