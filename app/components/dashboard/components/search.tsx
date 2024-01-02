import { Form, useSubmit } from "@remix-run/react";
import { useContext, ChangeEvent, FormEvent } from "react";
import { Input } from "~/components/ui/input";
import { DashboardContext } from "~/store/dashboard-context";

export function Search() {
  const { term, setTerm, q } = useContext(DashboardContext);
  const submit = useSubmit();
  const handleChange = (event: ChangeEvent) => {
    setTerm((event.target as HTMLInputElement).value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const isFirstSearch = q === null;
    submit(event.currentTarget as HTMLFormElement, {
      replace: !isFirstSearch,
    });
  };

  return (
    <div>
      <Form id="search-form" role="search" onChange={handleSubmit}>
        <Input
          value={term}
          id="q"
          onChange={handleChange}
          type="search"
          aria-label="Search contacts"
          placeholder="Search"
          name="q"
          className="md:w-[100px] lg:w-[300px]"
        />
      </Form>
    </div>
  );
}
