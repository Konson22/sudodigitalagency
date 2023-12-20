import PageHeader from "../components/PageHeader";

export default function WebDevelopementPage() {
  return (
    <div>
      <PageHeader
        title="Web Design and Developement"
        image={process.env.PUBLIC_URL + "/images/ux.png"}
        text="Designing Dreams, Building Brands: Your Website, Your Identity."
      />
      Web Design and Developement
    </div>
  );
}
