import { render, fireEvent } from "@testing-library/react";
import ExemplePourUnTestUnitaire from "../ExemplePourUnTestUnitaire";

it("Par défaut, le label devrait afficher default", () => {
  const wrapper = render(<ExemplePourUnTestUnitaire />);

  const isNumbersDisplayed = !!wrapper.queryByText("1234");
  const isDefaultDisplayed = !!wrapper.queryByText("default");

  expect(isNumbersDisplayed).toBeFalsy();
  expect(isDefaultDisplayed).toBeTruthy();
});

it("Quand j'appuie sur le bouton, le label affiche 1234", () => {
  const wrapper = render(<ExemplePourUnTestUnitaire />);

  const button = wrapper.getByText("Press me");
  fireEvent.click(button);

  const isNumbersDisplayed = !!wrapper.queryByText("1234");
  const isDefaultDispayed = !!wrapper.queryByText("default");

  expect(isNumbersDisplayed).toBeTruthy();
  expect(isDefaultDispayed).toBeFalsy();
});
