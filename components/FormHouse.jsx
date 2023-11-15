"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function FormHouse() {
  const [formFields, SetformFields] = useState({
    Ubicacion: "",
    Cant_Cuartos: "",
    Caracteristicas_Extra: "",
    Tiene_Servicios_Incluidos: "",
    Tipo_Objeto: "",
    Area_Inmueble: "",
    Precio: "",
    Descripcion: "",
    Imagen: [],
    Tiene_Garaje_Moto: "",
    Tipo_Vivienda: "",
    Tiene_Garaje_Carro: "",
    Tiene_Patio: "",
    Cant_Baños: "",
    Precio_Venta: "",
    AgentId: "1",
    TypehousingId: "",
    TypetargetId: "",
  });

  const handleFieldChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    SetformFields({ ...formFields, [name]: value });
  };

  const handleFilesChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    SetformFields({ ...formFields, Imagen: selectedImages });
    console.log(formFields);
  };

  const handleRadioChange = (name, value) => {
    SetformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(formFields).forEach(([name, value]) => {
      if (name == "Imagen") {
        formData.append("Imagen", formFields.Imagen);
      } else {
        formData.append(name, value);
      }
    });

    try {
      console.log(formData);
      const response = await fetch(
        "https://inmovilla.onrender.com/api/v1/home/",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error al subir el inmueble", error);
    }
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="Ubicación"
            name="Ubicacion"
            value={formFields.Ubicacion}
            onChange={handleFieldChange}
            required
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            name="Cant_Cuartos"
            value={formFields.Cant_Cuartos}
            onChange={handleFieldChange}
            required
            label="Cuartos"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center"></div>
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="number"
            label="Baños"
            name="Cant_Baños"
            value={formFields.Cant_Baños}
            onChange={handleFieldChange}
            required
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center"></div>
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="number"
            label="Precio"
            name="Precio"
            value={formFields.Precio}
            onChange={handleFieldChange}
            required
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center"></div>
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="number"
            label="Precio Venta"
            name="Precio_Venta"
            value={formFields.Precio_Venta}
            onChange={handleFieldChange}
            required
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center"></div>
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Textarea
            label="Descripcion"
            name="Descripcion"
            value={formFields.Descripcion}
            onChange={handleFieldChange}
            placeholder="Describe el inmueble"
            className="max-w-xs"
            required
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Textarea
            label="Caracteristicas extra"
            name="Caracteristicas_Extra"
            value={formFields.Caracteristicas_Extra}
            onChange={handleFieldChange}
            F
            placeholder="Escribe aqui"
            className="max-w-xs"
            required
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tiene servicios incluidos">
            <Radio
              value="Si"
              checked={formFields.Tiene_Servicios_Incluidos === "Si"}
              onChange={() =>
                handleRadioChange("Tiene_Servicios_Incluidos", "Si")
              }
            >
              Si
            </Radio>
            <Radio
              value="No"
              checked={formFields.Tiene_Servicios_Incluidos === "No"}
              onChange={() =>
                handleRadioChange("Tiene_Servicios_Incluidos", "No")
              }
            >
              No
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tiene Garaje Moto">
            <Radio
              value="Si"
              checked={formFields.Tiene_Garaje_Moto === "Si"}
              onChange={() => handleRadioChange("Tiene_Garaje_Moto", "Si")}
            >
              Si
            </Radio>
            <Radio
              value="No"
              checked={formFields.Tiene_Garaje_Moto === "No"}
              onChange={() => handleRadioChange("Tiene_Garaje_Moto", "No")}
            >
              No
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tiene Garaje Carro">
            <Radio
              value="Si"
              checked={formFields.Tiene_Garaje_Carro === "Si"}
              onChange={() => handleRadioChange("Tiene_Garaje_Carro", "Si")}
            >
              Si
            </Radio>
            <Radio
              value="No"
              checked={formFields.Tiene_Garaje_Carro === "No"}
              onChange={() => handleRadioChange("Tiene_Garaje_Carro", "No")}
            >
              No
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tiene Patio">
            <Radio
              value="Si"
              checked={formFields.Tiene_Patio === "Si"}
              onChange={() => handleRadioChange("Tiene_Patio", "Si")}
            >
              Si
            </Radio>
            <Radio
              value="No"
              checked={formFields.Tiene_Patio === "No"}
              onChange={() => handleRadioChange("Tiene_Patio", "No")}
            >
              No
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tipo de Inmueble" required>
            <Radio
              value="Casa"
              checked={formFields.TypehousingId === "1"}
              onChange={() => handleRadioChange("TypehousingId", "1")}
            >
              Casa
            </Radio>
            <Radio
              value="Departamento"
              checked={formFields.TypehousingId === "2"}
              onChange={() => handleRadioChange("TypehousingId", "2")}
            >
              Departamento
            </Radio>
            <Radio
              value="ApartaEstudio"
              checked={formFields.TypehousingId === "3"}
              onChange={() => handleRadioChange("TypehousingId", "3")}
            >
              ApartaEstudio
            </Radio>
            <Radio
              value="Finca"
              checked={formFields.TypehousingId === "4"}
              onChange={() => handleRadioChange("TypehousingId", "4")}
            >
              Finca
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RadioGroup label="Tipo de negocio" required>
            <Radio
              value="Casa"
              checked={formFields.TypetargetId === "1"}
              onChange={() => handleRadioChange("TypetargetId", "1")}
            >
              Venta
            </Radio>
            <Radio
              value="Departamento"
              checked={formFields.TypetargetId === "2"}
              onChange={() => handleRadioChange("TypetargetId", "2")}
            >
              Renta
            </Radio>
            <Radio
              value="ApartaEstudio"
              checked={formFields.TypetargetId === "3"}
              onChange={() => handleRadioChange("TypetargetId", "2")}
            >
              Permuta
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="number"
            label="Area del inmueble"
            name="Area_Inmueble"
            value={formFields.Area_Inmueble}
            onChange={handleFieldChange}
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">m2</span>
              </div>
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="Agente Inmobiliario"
            name="AgentId"
            value={"1"}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="file"
            accept="image/*"
            name="Imagen"
            multiple
            onChange={handleFilesChange}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
