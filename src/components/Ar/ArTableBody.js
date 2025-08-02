import CopyText from "../ui/CopyText";


const ArTableBody = ({ data }) => {
  return (
    <tbody>
      {data?.map((i, k) => (
        <tr key={k}>
          <td>
            <CopyText text={i?.uniq_tag_boq_code} />
          </td>
          <td>
            <CopyText text={i?.titul_no} />
          </td>
          <td>
            <CopyText text={i?.subtitle_no} />
          </td>
          <td>
            <CopyText text={i?.scope} />
          </td>
          <td>
            <CopyText text={i?.drawing_number} />
          </td>
          <td>
            <CopyText text={i?.rev_no} />
          </td>
          <td>
            <CopyText text={i?.change_number} />
          </td>
          <td>
            <CopyText text={i?.dwg_status} />
          </td>
          <td>
            <CopyText text={i?.component_type} />
          </td>
          <td>
            <CopyText text={i?.unique_tag} />
          </td>
          <td>
            <CopyText text={i?.component_tag} />
          </td>
          <td>
            <CopyText text={i?.tag_no} />
          </td>
          <td>
            <CopyText text={i?.boq_code} />
          </td>
          <td>
            <CopyText text={i?.description_en_ru} />
          </td>
          <td>
            <CopyText text={i?.qty} />
          </td>
          <td>
            <CopyText text={i?.unit} />
          </td>
          <td>
            <CopyText text={i?.weight} />
          </td>
          <td>
            <CopyText text={i?.formul} />
          </td>
          <td>
            <CopyText text={i?.tq_number} />
          </td>
          <td>
            <CopyText text={i?.notes} />
          </td>
          <td>
            <CopyText text={i?.access_id} />
          </td>
          <td>
            <CopyText text={i?.r_awp} />
          </td>
          <td>
            <CopyText text={i?.record_date} />
          </td>
          <td>
            <CopyText text={i?.responsible} />
          </td>
          <td>
            <CopyText text={i?.iwp_type} />
          </td>
          <td>
            <CopyText text={i?.iwp_adi} />
          </td>
          <td>
            <CopyText text={i?.construction_start} />
          </td>
          <td>
            <CopyText text={i?.construction_finish} />
          </td>
          <td>
            <CopyText text={i?.contract} />
          </td>
          <td>
            <CopyText text={i?.record_date} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ArTableBody;
