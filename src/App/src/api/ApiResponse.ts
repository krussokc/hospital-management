export interface ApiResponse<T> {
  data: T;
  success: boolean;
  errors: string[];
}