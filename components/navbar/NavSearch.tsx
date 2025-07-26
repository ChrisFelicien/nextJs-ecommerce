"use client";

import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search"), searchParams]);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    return replace(`/products?search=${search}`);
  }, 200);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Input
      type='search'
      placeholder='Search product...'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={handleChange}
    />
  );
};

export default NavSearch;
