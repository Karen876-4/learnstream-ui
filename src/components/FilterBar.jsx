function FilterBar({
  search,
  setSearch,
  area,
  setArea,
  format,
  setFormat
}) {

  return (

    <div className="filter-bar">

      <input
        type="text"
        placeholder="Buscar conferencia..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={area}
        onChange={(e) =>
          setArea(e.target.value)
        }
      >

        <option value="Todos">
          Todas las áreas
        </option>

        <option value="Frontend">
          Frontend
        </option>

        <option value="Backend">
          Backend
        </option>

        <option value="Database">
          Database
        </option>

      </select>

      <select
        value={format}
        onChange={(e) =>
          setFormat(e.target.value)
        }
      >

        <option value="Todos">
          Todos los formatos
        </option>

        <option value=".mp4">
          .mp4
        </option>

        <option value=".mov">
          .mov
        </option>

        <option value=".DVR">
          .DVR
        </option>

      </select>

    </div>

  );
}

export default FilterBar;