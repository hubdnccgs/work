export interface SubscribePlanResponse {
  code: number;
  msg: string;
  data: {
    list: SubscribePlan[];
    total_count: number;
  };
}

export interface SubscribePlan {
  idx: number;
  title: string;
  plan_min_count?: number;
  plan_max_count?: number;
  pr_original_price: number;
  isView: number;
  pr_sale_type?: number;
  pe_sale_value?: number;
  type: number;
}
