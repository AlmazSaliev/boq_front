import styled from "@emotion/styled";

const MainTable = ({
  bodyTableComponent,
  titleTableComponent,
}) => {
  return (
    <WrapperAll>
      <table>
        {titleTableComponent}
        {/* <thead>
          <tr>
            {arrTitle?.map((i, k) => (
              <th scope="col" key={k}>
                <Tooltip title={<TooltipTitle i={i} dataTable={dataTable} />}>
                  <div className="th_div_input">
                    <p>{i?.title}</p>
                    <form className="div_input_item">
                      <input />
                    </form>
                  </div>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead> */}
        {/* <tbody>
          {dataTable?.data?.map((i, k) => (
            <tr key={k}>
              {Object.keys(i)?.map((t, p) => (
                <td key={p}>
                  <CopyText text={i[t]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody> */}
        {bodyTableComponent}
      </table>
    </WrapperAll>
  );
};
export default MainTable;
const WrapperAll = styled("div")`
  table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  thead {
    position: sticky;
    top: 0px;
  }
  thead,
  tfoot {
    background-color: rgb(228 240 245);
  }
  th,
  td {
    border: 1px solid rgb(160 160 160);
    padding: 5px 10px;
  }
  td:last-of-type {
    text-align: center;
  }
  tbody > tr:nth-of-type(even) {
    background-color: rgb(237 238 242);
  }
  tbody > tr > td {
    cursor: pointer;
  }
  .th_div_input {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5px;
    p {
      white-space: nowrap;
      text-transform: uppercase;
    }
  }
  .div_input_item {
    width: 100%;
    input {
      width: 100%;
      padding: 2px 5px;
    }
  }
`;
