const CreateTables = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <tr>
        <td>
          <input type={data.columnType} />
        </td>
      </tr>
    </>
  );
};
export default CreateTables;
