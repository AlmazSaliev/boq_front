import { MainGridTable } from "../components/table/MainGridTable";

const PageLayoutComponent = ({
  infoMessageComponent,
  btnComponent,
  row = [],
  column = [],
  index = "civil",
  getDataUrl = "",
}) => {
  return (
    <div>
      <div className="box">
        <div className="box_table">
          <MainGridTable
            getDataUrl={getDataUrl}
            row={row}
            column={column}
            index={index}
          />
        </div>
        <div className="box_info_download">
          <div className="box_info_message">{infoMessageComponent}</div>
          {btnComponent}
        </div>
      </div>
    </div>
  );
};
export default PageLayoutComponent;
