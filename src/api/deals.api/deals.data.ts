export type GetDealsData = GetDealData[];

export type GetDealData = {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  price: number;
  views: number;
  userId: string;
  user: {
    email: string;
  };
};
