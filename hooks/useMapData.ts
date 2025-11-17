import { useEffect, useState } from "react";

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Place {
  id: string;
  name: string;
  category_id: string;
  latitude: number;
  longitude: number;
  distance: number | null;
  description: string;
  category?: Category;
}

export function useMapData() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJSON = async () => {
      const response = await fetch("/mapData.json"); // <-- public folder
      const data = await response.json();

      setCategories(data.categories);
      setPlaces(data.places);
      setLoading(false);
    };

    loadJSON();
  }, []);

  return { categories, places, loading };
}

export function filterPlacesByCategory(
  places: Place[],
  categories: Category[],
  categoryName: string
): Place[] {
  const category = categories.find((c) => c.name === categoryName);
  if (!category) return [];
  return places.filter((p) => p.category_id === category.id);
}

export function searchPlaces(
  places: Place[],
  categories: Category[],
  query: string
): Place[] {
  const lower = query.toLowerCase();

  const matchedCategory = categories.find((c) =>
    c.name.toLowerCase().includes(lower)
  );

  if (matchedCategory) {
    return places.filter((p) => p.category_id === matchedCategory.id);
  }

  return places.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
  );
}
