import ShowMore from "react-show-more-button";
import { useEffect, useState, useRef } from "react";

export const ShowMoreContent = (props) => {
  const [state, setState] = useState({
    button: true,
    showMore: false,
    textHeight: 0,
    strN: 0,
  });

  const blockRef = useRef(null);
  const textDivRef = useRef(null);
  const [fontSize, setFontSize] = useState(18.5);

  useEffect(() => {
    const handleFontSizeChange = () => {
      if (blockRef.current) {
        const computedStyle = window.getComputedStyle(blockRef.current);
        const fontSizeValue = parseFloat(
          computedStyle.getPropertyValue("line-height")
        );
        setFontSize(fontSizeValue);
      }
    };

    handleFontSizeChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
    window.addEventListener("resize", handleFontSizeChange); // Добавляем слушатель на изменение размеров окна
    return () => {
      window.removeEventListener("resize", handleFontSizeChange); // Удаляем слушатель при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    const handleHeightChange = () => {
      if (textDivRef.current) {
        const height = textDivRef.current.offsetHeight;
        setState({ ...state, textHeight: height });
      }
    };

    handleHeightChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
    window.addEventListener("resize", handleHeightChange); // Добавляем слушатель на изменение размеров окна
    return () => {
      window.removeEventListener("resize", handleHeightChange); // Удаляем слушатель при размонтировании компонента
    };
  }, []);

  return (
    <>
      {/*
        // Math.round(props.height / fontSize - 2) * fontSize //- это у нас максимальное значение высоты, которое может быть отображено

        // ref={textDivRef} // это div, который нужен для получения высоты всего текста (даже невидимой его части)

        // state.textHeight > Math.round(props.height / fontSize - 2) * fontSize  // это выражение сравнение, где высота текста (в нашем случае textDivRef) сравнивается с максимально возможной отрисованной высотой
       */}
      {state.showMore ? (
        <p ref={blockRef}>
          <div ref={textDivRef}>{props.content}</div>
        </p>
      ) : (
        <p
          ref={blockRef}
          style={{
            maxHeight:
              Math.round(props.height / fontSize - 2) * fontSize + "px",
            overflow: "hidden",
          }}
        >
          <div ref={textDivRef}>{`${props.content}`}</div>
        </p>
      )}
      {state.textHeight > Math.round(props.height / fontSize - 2) * fontSize ? (
        <>
          <div
            className="flex showMore__btn"
            style={{ justifyContent: "end", marginTop: "15px" }}
          >
            <button
              onClick={() => setState({ ...state, showMore: !state.showMore })}
            >
              {!state.showMore ? (
                "Показать всю новость"
              ) : (
                <a href={"#" + props.i}>Скрыть новость</a>
              )}
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
