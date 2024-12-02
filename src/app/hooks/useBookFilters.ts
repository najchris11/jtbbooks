import { useState, useMemo } from 'react';
import { Book } from '@/app/types';

export default function useBookFilters(books: Book[], searchQuery : string) {
  const [filteredAgeGroups, setFilteredAgeGroups] = useState<{ [key: string]: boolean }>({});
  const [filteredSubGenres, setFilteredSubGenres] = useState<{ [key: string]: boolean }>({});
  const [filteredTropes, setFilteredTropes] = useState<{ [key: string]: boolean }>({});

  const handleFilterChange = (filterType: string, selectedFilters: { [key: string]: boolean }) => {
    if (filterType === 'ageGroup') {
      setFilteredAgeGroups(selectedFilters);
    } else if (filterType === 'subGenre') {
      setFilteredSubGenres(selectedFilters);
    } else if (filterType === 'trope') {
      setFilteredTropes(selectedFilters);
    }
  };

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => 
        !Object.keys(filteredAgeGroups).some(
          (ageGroup) => filteredAgeGroups[ageGroup] && book.ageRange.includes(ageGroup)
        )
      )
      .filter((book) =>
        !Object.keys(filteredSubGenres).some(
          (subGenre) => filteredSubGenres[subGenre] && book.subGenres.includes(subGenre)
        )
      )
      .filter((book) =>
        !Object.keys(filteredTropes).some(
          (trope) => filteredTropes[trope] && book.tropes.includes(trope)
        )
      )
      .filter((book) =>
        searchQuery === '' ||
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.subGenres.some((subGenre) => subGenre.toLowerCase().includes(searchQuery)) ||
        book.tropes.some((trope) => trope.toLowerCase().includes(searchQuery))
      );
  }, [books, filteredAgeGroups, filteredSubGenres, filteredTropes, searchQuery]);

  const ageGroups = useMemo(() => [...new Set(books.map((book) => book.ageRange))], [books]);
  const subGenres = useMemo(() => [...new Set(books.flatMap((book) => book.subGenres))], [books]);
  const tropes = useMemo(() => [...new Set(books.flatMap((book) => book.tropes))], [books]);

  return {
    filteredBooks,
    handleFilterChange,
    ageGroups,
    subGenres,
    tropes,
  };
}