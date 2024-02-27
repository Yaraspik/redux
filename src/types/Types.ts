export type Item = {
  title: string,
  price: string,
  id?: string,
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}