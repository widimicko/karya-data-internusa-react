import "./style.css";

const SubscriptionSection = ({ content }) => {
  const { description, title } = content;

  return (
    <div className="subscription">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" disabled />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
