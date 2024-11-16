import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SetQuery from "./SetQuery";
import SetType from "./SetType";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [removePets, setRemovePets] = useState(pets);

  const filteredByName = removePets.filter((pet) => pet.name.includes(query));
  const filteredByType = filteredByName.filter((pet) =>
    pet.type.includes(type)
  );

  const handleClick = (petId) => {
    const confirmAdoption = window.confirm(
      "Are you sure you want to adopt this pet?"
    );
    if (confirmAdoption) {
      const petList = removePets.filter((pet) => pet.id !== petId);
      setRemovePets(petList);
      alert("Thank you for adopting!");
    } else {
      alert("Adoption canceled.");
    }
  };
  const petList = filteredByType.map((pet) => (
    <PetItem handleClickAdopt={handleClick} pet={pet} key={pet.id} />
  ));
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SetQuery searchText={(event) => setQuery(event.target.value)} />
              <br />
              <SetType typePets={(event) => setType(event.target.value)} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
