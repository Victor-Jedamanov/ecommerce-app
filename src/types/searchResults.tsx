import type { productInfo } from "./productInfo";

type searchResults = {
  products: productInfo[];
  total_pages: number;
  current_page: number;
  result_stats: {
    range_start: number,
    range_end: number,
    total_results: number
  };
  keyword: string;
  delivery_location: string;
}

export type { searchResults };