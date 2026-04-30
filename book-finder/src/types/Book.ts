export type Book = {
  title: string;
  publisher: string;
  datetime: string;
  authors: Array<string>;
  thumbnail: string;
  url: string;
  isbn: string;
  contents: string;
  //   price: number;
  //   sale_price: number;
  //   status: string;
  //   translators: Array<string>;
};

export type ApiResponse<T> = {
  documents: T[];
  meta: {
    is_end: boolean;
  };
};

export type Direction = "PREV" | "NEXT";
