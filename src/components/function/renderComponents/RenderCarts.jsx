export const RenderCarts = ({passed, handlePassed, handleClick, dataArray, setOk, ok, truAnswer, Cart, toLocal }) => {
  return (
    <>
      {passed && (
        <div className="answers top">
            <button
              onClick={() => {
                handlePassed();
              }}
            >
              Перепройти
            </button>
            <h2>
              Правильные ответы " {truAnswer} из {dataArray.length} "
            </h2>
        </div>
      )}

      <div className="inner">
        <div className="carts">
          {dataArray.map((item, index) => (
            <Cart
              key={index}
              title={item.title}
              desc={item.desc}
              ok={ok[index]}
              onClick={() => {
                !passed && handleClick(index, setOk);
              }}
            />
          ))}
        </div>
      </div>

      <div className="answers">
        {!passed && (
          <>
            <h2>
              Правильные ответы " {truAnswer} из {dataArray.length} "
            </h2>
            <button
              style={{ marginBottom: "50px" }}
              onClick={() => {
                toLocal();
              }}
            >
              Дальше
            </button>
          </>
        )}
      </div>
    </>
  );
};
