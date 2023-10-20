import React from "react";

const appeal = ({data}) => {
    return (<React.Fragment>
        <div className="appeal_wrap">
                <p className="appeal-text">
                  <strong className="strong-text">{data+"!"}</strong>
                </p>
                <p className="appeal-text">
                  {"Ваш заказ успешно оформлен"}
                  <br />

                  {
                    "В ближайшее время с Вами свяжется наш оператор для подтверждения"
                  }
                </p>

                <p className="appeal-text">
                  <strong className="strong-text">
                    Благодарим вас за оказанное доверие и желаем приятного
                    путешествия!
                  </strong>
                </p>
              </div>
    </React.Fragment>)
}

export default appeal;