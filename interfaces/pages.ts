export type layout = "Authenticated" | "Default";

export interface IPageServerSideProps {
  props: {
    isAuthenticated?: boolean;
    layout: layout;
  };
}
