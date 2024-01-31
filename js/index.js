// Datos de ejemplo
const estadosMexico = {
    "Hidalgo": {
      "municipios": {
        "Pachuca": ["Real del Monte", "Cerro de Cubitos", "Pachuquilla"],
        "Tulancingo": ["Tulancingo de Bravo", "San Francisco", "San Nicolás"],
        "Tula": ["San Marcos", "Santa María Macua", "Tula de Allende"]
      }
    },
    "Estado de México": {
      "municipios": {
        "Toluca": ["Metepec", "Toluca de Lerdo", "Zinacantepec"],
        "Huehuetoca": ["Huehuetoca Centro", "Santa María Ajoloapan", "San Mateo Ixtacalco"],
        "Cuatitlan Izcalli": ["Cuautitlán Izcalli Centro", "San Francisco Tepojaco", "Lomas de Cuautitlán"]
      }
    },
    "Guanajuato": {
      "municipios": {
        "León": ["León de los Aldama", "Santiago de los Reyes", "La Martinica"],
        "Irapuato": ["Irapuato Centro", "San Roque de Montes", "Las Heras"],
        "Celaya": ["Celaya Centro", "San Juan de la Vega", "La Aurora"]
      }
    }
  };

  const estadosColombia = {
    "Cali": {
      "municipios": {
        "Santiago de Cali": ["San Antonio", "San Fernando", "Granada"],
        "Buenaventura": ["Ciudadela Sucre", "Puente Nayero", "La Playita"],
        "Palmira": ["Barrio El Trébol", "Urbanización Pance", "Barrio La Villa"]
      }
    },
    "Medellín": {
      "municipios": {
        "Envigado": ["Barrio Alcalá", "Barrio Jardines", "Barrio Mesa"],
        "Bello": ["Niquía", "Cabañas", "Zamora"],
        "Itagüí": ["El Poblado", "Santa María", "Calatrava"]
      }
    }
  };

  let paisSeleccionado;

  function cargarEstados() {
    paisSeleccionado = document.getElementById("pais").value;
    const estadoSelect = document.getElementById("estado");

    estadoSelect.innerHTML = "<option value=''>Seleccione un estado</option>";

    if (paisSeleccionado === "mexico") {
      for (const estado in estadosMexico) {
        const opcionEstado = document.createElement("option");
        opcionEstado.value = estado;
        opcionEstado.textContent = estado;
        estadoSelect.appendChild(opcionEstado);
      }

      estadoSelect.disabled = false;
    } else if (paisSeleccionado === "colombia") {
      for (const estadoC in estadosColombia) {
        const opcionEstado = document.createElement("option");
        opcionEstado.value = estadoC;
        opcionEstado.textContent = estadoC;
        estadoSelect.appendChild(opcionEstado);
      }

      estadoSelect.disabled = false;
    } else {
      estadoSelect.disabled = true;
    }

    // Al cambiar de país, reiniciar las selecciones posteriores
    document.getElementById("municipio").innerHTML = "<option value=''>Seleccione un municipio</option>";
    document.getElementById("localidad").innerHTML = "<option value=''>Seleccione una localidad</option>";
  }

  function cargarMunicipios() {
    const estadoSeleccionado = document.getElementById("estado").value;
    const municipioSelect = document.getElementById("municipio");

    municipioSelect.innerHTML = "<option value=''>Seleccione un municipio</option>";

    if (paisSeleccionado === "mexico" && estadoSeleccionado in estadosMexico) {
      for (const municipio in estadosMexico[estadoSeleccionado].municipios) {
        const opcionMunicipio = document.createElement("option");
        opcionMunicipio.value = municipio;
        opcionMunicipio.textContent = municipio;
        municipioSelect.appendChild(opcionMunicipio);
      }

      municipioSelect.disabled = false;
    } else if (paisSeleccionado === "colombia" && estadoSeleccionado in estadosColombia) {
      for (const municipio in estadosColombia[estadoSeleccionado].municipios) {
        const opcionMunicipio = document.createElement("option");
        opcionMunicipio.value = municipio;
        opcionMunicipio.textContent = municipio;
        municipioSelect.appendChild(opcionMunicipio);
      }

      municipioSelect.disabled = false;
    } else {
      municipioSelect.disabled = true;
    }

    // Al cambiar de estado, reiniciar las selecciones posteriores
    document.getElementById("localidad").innerHTML = "<option value=''>Seleccione una localidad</option>";
  }

  function cargarLocalidades() {
    const localidadSelect = document.getElementById("localidad");

    localidadSelect.innerHTML = "<option value=''>Seleccione una localidad</option>";

    const estadoSeleccionado = document.getElementById("estado").value;
    const municipioSeleccionado = document.getElementById("municipio").value;

    if (paisSeleccionado === "mexico" && estadoSeleccionado in estadosMexico) {
      if (municipioSeleccionado in estadosMexico[estadoSeleccionado].municipios) {
        for (const localidad of estadosMexico[estadoSeleccionado].municipios[municipioSeleccionado]) {
          const opcionLocalidad = document.createElement("option");
          opcionLocalidad.value = localidad;
          opcionLocalidad.textContent = localidad;
          localidadSelect.appendChild(opcionLocalidad);
        }

        localidadSelect.disabled = false;
      }
    } else if (paisSeleccionado === "colombia" && estadoSeleccionado in estadosColombia) {
      if (municipioSeleccionado in estadosColombia[estadoSeleccionado].municipios) {
        for (const localidad of estadosColombia[estadoSeleccionado].municipios[municipioSeleccionado]) {
          const opcionLocalidad = document.createElement("option");
          opcionLocalidad.value = localidad;
          opcionLocalidad.textContent = localidad;
          localidadSelect.appendChild(opcionLocalidad);
        }

        localidadSelect.disabled = false;
      }
    } else {
      localidadSelect.disabled = true;
    }

  }

  function mostrarDatosSeleccionados() {
    const paisSeleccionado = document.getElementById("pais").value;
    const estadoSeleccionado = document.getElementById("estado").value;
    const municipioSeleccionado = document.getElementById("municipio").value;
    const localidadSeleccionada = document.getElementById("localidad").value;

    document.getElementById("pais-seleccionado").textContent = `País: ${paisSeleccionado}`;
    document.getElementById("estado-seleccionado").textContent = `Estado: ${estadoSeleccionado}`;
    document.getElementById("municipio-seleccionado").textContent = `Municipio: ${municipioSeleccionado}`;
    document.getElementById("localidad-seleccionada").textContent = `Localidad: ${localidadSeleccionada}`;
  }