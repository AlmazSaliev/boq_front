import CopyText from "../ui/CopyText";

//     private Long id;
//     private String titul_no;
//     private String titul_subtitule_no;
//     private String drawing_number;
//     private String scope;
//     private String component_type;
//     private String unique_tag;
//     private String material_description_example;
//     private String ident_no;
//     private String ident_kod;
//     private String length_mm;
//     private String size1_mm;
//     private String class1;
//     private String rebar_bend_profile_number;
//     private String item_quantity_1_from_item_in_column_g;
//     private String item_quantity_1_unit_from_item_in_column_g;
//     private String item_quantity_2_secondary_qty;
//     private String item_quantity_2_unit_secondary_qty;
//     private String total_length_meter;
//     private String total_item_quantity;
//     private String total_item_quantity_unit;
//     private String typical_name;
//     private Double typical_name_qty;
//     private Long access_id;
const ArMaterialTableBody = ({ data = [] }) => {
  return (
    <tbody>
      {data?.map((i, k) => (
        <tr key={k}>
          <td>
            <CopyText text={i?.titul_no} />
          </td>
          <td>
            <CopyText text={i?.titul_subtitule_no} />
          </td>
          <td>
            <CopyText text={i?.drawing_number} />
          </td>
          <td>
            <CopyText text={i?.scope} />
          </td>
          <td>
            <CopyText text={i?.component_type} />
          </td>
          <td>
            <CopyText text={i?.unique_tag} />
          </td>
          <td>
            <CopyText text={i?.material_description_example} />
          </td>
          <td>
            <CopyText text={i?.ident_no} />
          </td>
          <td>
            <CopyText text={i?.ident_kod} />
          </td>
          <td>
            <CopyText text={i?.length_mm} />
          </td>
          <td>
            <CopyText text={i?.size1_mm} />
          </td>
          <td>
            <CopyText text={i?.class1} />
          </td>
          <td>
            <CopyText text={i?.rebar_bend_profile_number} />
          </td>
          <td>
            <CopyText text={i?.item_quantity_1_from_item_in_column_g} />
          </td>
          <td>
            <CopyText text={i?.item_quantity_1_unit_from_item_in_column_g} />
          </td>
          <td>
            <CopyText text={i?.item_quantity_2_secondary_qty} />
          </td>
          <td>
            <CopyText text={i?.item_quantity_2_unit_secondary_qty} />
          </td>
          <td>
            <CopyText text={i?.total_length_meter} />
          </td>
          <td>
            <CopyText text={i?.total_item_quantity} />
          </td>
          <td>
            <CopyText text={i?.total_item_quantity_unit} />
          </td>
          <td>
            <CopyText text={i?.typical_name} />
          </td>
          <td>
            <CopyText text={i?.typical_name_qty} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ArMaterialTableBody;
