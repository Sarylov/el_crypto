export interface IFeetBack {
  type: "error" | "warning" | "info" | "success";
  message: string;
  title?: string;
}
