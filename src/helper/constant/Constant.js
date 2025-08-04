// Snackbar variant
export const SnackbarVariant = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

//nav path
export const Nav_Path = [
  {
    value: "/ar",
    label: "Architecture",
  },
  {
    value: "/building",
    label: "Building",
  },
  {
    value: "/civil",
    label: "Civil",
  },
  {
    value: "/electric",
    label: "Electric",
  },
  {
    value: "/eqp",
    label: "EQP",
  },
  {
    value: "/hvac",
    label: "Hvac",
  },
  {
    value: "/landscaping",
    label: "Landscaping",
  },
  {
    value: "/steel",
    label: "Steel",
  },
  {
    value: "/ug_pipe",
    label: "UG Pipe",
  },
  {
    value: "/boq",
    label: "BOQ Data",
  },
];
export const Nav_Ar = [
  {
    value: "/ar",
    label: "Works",
  },
  {
    value: "/ar/material",
    label: "Material",
  },
];
export const Nav_Building = [
  {
    value: "/building",
    label: "Works",
  },
  {
    value: "/building/material",
    label: "Material",
  },
];
export const Nav_Civil = [
  {
    value: "/civil",
    label: "Works",
  },
  {
    value: "/civil/material",
    label: "Material",
  },
];
export const Nav_Electric = [
  {
    value: "/electric",
    label: "Works",
  },
  {
    value: "/electric/material",
    label: "Material",
  },
  {
    value: "/electric/cable",
    label: "Material Cable",
  },
];
export const Nav_Eqp = [
  {
    value: "/eqp",
    label: "Works",
  },
  {
    value: "/eqp/material",
    label: "Material",
  },
];
export const Nav_Hvac = [
  {
    value: "/hvac",
    label: "Works",
  },
  {
    value: "/hvac/material",
    label: "Material",
  },
];
export const Nav_Landscaping = [
  {
    value: "/landscaping",
    label: "Works",
  },
  {
    value: "/landscaping/material",
    label: "Material",
  },
];
export const Nav_Steel = [
  {
    value: "/steel",
    label: "Works",
  },
  {
    value: "/steel/material",
    label: "Material",
  },
];
export const Nav_UG_Pipe = [
  {
    value: "/ug_pipe",
    label: "Works",
  },
  {
    value: "/ug_pipe/material",
    label: "Material",
  },
];
export const Nav_Boq_Catalog_Price = [
  {
    value: "/boq",
    label: "Catalog",
  },
  {
    value: "/boq/unit_price",
    label: "Unit Price",
  },
  {
    value: "/boq/progress",
    label: "BOQ Progress",
  },
];

//info message tabletitle
export const Info_Table_Title = [
  {
    headerName: "responsible",
  },
  {
    headerName: "link",
  },
  {
    headerName: "change_info",
  },
  {
    headerName: "change_status",
  },
  {
    headerName: "date",
  },
];

export const Civil_Works_Key = [
  "uniq_tag_boq_code",
  "titul_no",
  "subtitle_no",
  "scope",
  "drawing_number",
  "rev_no",
  "change_number",
  "dwg_status",
  "component_type",
  "unique_tag",
  "component_tag",
  "tag_no",
  "boq_code",
  "description_en_ru",
  "qty",
  "unit",
  "weight",
  "formul",
  "tq_number",
  "notes",
  "access_id",
  "r_awp",
  "record_date",
  "responsible",
  "iwp_type",
  "iwp_adi",
  "construction_start",
  "construction_finish",
  "contract",
];
export const Civil_Works_Table_Title = [
  {
    headerName: "Uniq Tag BOQ Code",
    valueGetter: (p) => p.data.uniq_tag_boq_code,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Titul no",
    valueGetter: (p) => p.data.titul_no,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Subtitle no",
    valueGetter: (p) => p.data.subtitle_no,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Scope",
    valueGetter: (p) => p.data.scope,
  },
  {
    headerName: "Drawing number",
    valueGetter: (p) => p.data.drawing_number,
  },
  {
    headerName: "Rev.no",
    valueGetter: (p) => p.data.rev_no,
  },
  {
    headerName: "Change number",
    valueGetter: (p) => p.data.change_number,
  },
  {
    headerName: "DWG status",
    valueGetter: (p) => p.data.dwg_status,
  },
  {
    headerName: "Component type",
    valueGetter: (p) => p.data.component_type,
  },
  {
    headerName: "Unique tag",
    valueGetter: (p) => p.data.unique_tag,
  },
  {
    headerName: "Component tag",
    valueGetter: (p) => p.data.component_tag,
  },
  {
    headerName: "Tag no",
    valueGetter: (p) => p.data.tag_no,
  },
  {
    headerName: "BOQ code",
    valueGetter: (p) => p.data.boq_code,
  },
  {
    headerName: "Description en/ru",
    valueGetter: (p) => p.data.description_en_ru,
  },
  {
    headerName: "QTY",
    valueGetter: (p) => p.data.qty,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Unit",
    valueGetter: (p) => p.data.unit,
  },
  {
    headerName: "Weight",
    valueGetter: (p) => p.data.weight,
  },
  {
    headerName: "Formul",
    valueGetter: (p) => p.data.formul,
  },
  {
    headerName: "TQ number",
    valueGetter: (p) => p.data.tq_number,
  },
  {
    headerName: "Notes",
    valueGetter: (p) => p.data.notes,
  },
  {
    headerName: "Access ID",
    valueGetter: (p) => p.data.access_id,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "R-AWP ID",
    valueGetter: (p) => p.data.r_awp,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Record date",
    valueGetter: (p) => p.data.record_date,
    sortable: true,
    filter: "agDateColumnFilter",
  },
  {
    headerName: "Responsible",
    valueGetter: (p) => p.data.responsible,
  },
  {
    headerName: "IWP type",
    valueGetter: (p) => p.data.iwp_type,
  },
  {
    headerName: "IWP adi",
    valueGetter: (p) => p.data.iwp_adi,
  },
  {
    headerName: "Construction start",
    valueGetter: (p) => p.data.construction_start,
    sortable: true,
    filter: "agDateColumnFilter",
  },
  {
    headerName: "Construction finish",
    valueGetter: (p) => p.data.construction_finish,
    sortable: true,
    filter: "agDateColumnFilter",
  },
  {
    headerName: "Contract",
    valueGetter: (p) => p.data.contract,
  },
];
export const Civil_Material_Table_Title = [
  {
    headerName: "Titul no",
    valueGetter: (p) => p.data.titul_no,
  },
  {
    headerName: "Titul subtitule no",
    valueGetter: (p) => p.data.titul_subtitule_no,
  },
  {
    headerName: "Drawing number",
    valueGetter: (p) => p.data.drawing_number,
  },
  {
    headerName: "Scope",
    valueGetter: (p) => p.data.scope,
  },
  {
    headerName: "Component type",
    valueGetter: (p) => p.data.component_type,
  },
  {
    headerName: "Unique tag",
    valueGetter: (p) => p.data.unique_tag,
  },
  {
    headerName: "Material description example",
    valueGetter: (p) => p.data.material_description_example,
  },
  {
    headerName: "Ident no",
    valueGetter: (p) => p.data.ident_no,
  },
  {
    headerName: "Ident kod",
    valueGetter: (p) => p.data.ident_kod,
  },
  {
    headerName: "Length (mm)",
    valueGetter: (p) => p.data.length_mm,
  },
  {
    headerName: "Size1 (mm)",
    valueGetter: (p) => p.data.size1_mm,
  },
  {
    headerName: "Class",
    valueGetter: (p) => p.data.class1,
  },
  {
    headerName: "Rebar bend profile number",
    valueGetter: (p) => p.data.rebar_bend_profile_number,
  },
  {
    headerName: "Item quantity 1 from item in column 'G'",
    valueGetter: (p) => p.data.item_quantity_1_from_item_in_column_g,
  },
  {
    headerName: "Item quantity 1 unit from item in column 'G'",
    valueGetter: (p) => p.data.item_quantity_1_unit_from_item_in_column_g,
  },
  {
    headerName: "Item quantity 2 secondary qty",
    valueGetter: (p) => p.data.item_quantity_2_secondary_qty,
  },
  {
    headerName: "Item quantity 2 unit secondary qty",
    valueGetter: (p) => p.data.item_quantity_2_unit_secondary_qty,
  },
  {
    headerName: "Total length meter",
    valueGetter: (p) => p.data.total_length_meter,
  },
  {
    headerName: "Total item quantity",
    valueGetter: (p) => p.data.total_item_quantity,
  },
  {
    headerName: "Total item quantity unit",
    valueGetter: (p) => p.data.total_item_quantity_unit,
  },
  {
    headerName: "Typical name",
    valueGetter: (p) => p.data.typical_name,
  },
  {
    headerName: "Typical name qty",
    valueGetter: (p) => p.data.typical_name_qty,
  },
  {
    headerName: "Access ID",
    valueGetter: (p) => p.data.access_id,
  },
];

export const Civil_Works_Unique_Tag = [
  {
    title: "Unique Tag + BOQ Code",
    value: "uniq_tag_boq_code",
  },
  {
    title: "Titul NO",
    value: "titul_no",
  },
  {
    title: "Subtitle NO",
    value: "subtitle_no",
  },
  {
    title: "Scope",
    value: "scope",
  },
  {
    title: "Drawing Number",
    value: "drawing_number",
  },
  {
    title: "Rev NO",
    value: "rev_no",
  },
  {
    title: "Change Number",
    value: "change_number",
  },
  {
    title: "DWG Status",
    value: "dwg_status",
  },
  {
    title: "Component Type",
    value: "component_type",
  },
  {
    title: "Component Tag",
    value: "component_tag",
  },
  {
    title: "Tag NO",
    value: "tag_no",
  },
  {
    title: "BOQ Code",
    value: "boq_code",
  },
  {
    title: "Description EN/RU",
    value: "description_en_ru",
  },
  {
    title: "QTY",
    value: "qty",
  },
  {
    title: "Unit",
    value: "unit",
  },
  {
    title: "Weight",
    value: "weight",
  },
  {
    title: "Formul",
    value: "formul",
  },
  {
    title: "TQ Number",
    value: "tq_number",
  },
  {
    title: "Notes",
    value: "notes",
  },
  {
    title: "Access ID",
    value: "access_id",
  },
  {
    title: "R-AWP ID",
    value: "r_awp",
  },
  {
    title: "Record Date",
    value: "record_date",
  },
  {
    title: "Responsible",
    value: "responsible",
  },
  {
    title: "IWP Type",
    value: "iwp_type",
  },
  {
    title: "IWP Adi",
    value: "iwp_adi",
  },
  {
    title: "Construction Start",
    value: "construction_start",
  },
  {
    title: "Construction Finish",
    value: "construction_finish",
  },
  {
    title: "Contract",
    value: "contract",
  },
];
