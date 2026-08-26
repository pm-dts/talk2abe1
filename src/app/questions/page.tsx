"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";
import QuestionFilters from "@/components/questions/QuestionFilters";
import QuestionList from "@/components/questions/QuestionList";
import CategorySidebar from "@/components/questions/CategorySidebar";
import BreadcrumbSchema, {
  buildBreadcrumbs,
} from "@/components/seo/BreadcrumbSchema";

import { categories as categoryOptions } from "@/data/categories";
import { questions } from "@/data/questions";

export default function AskAbePage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const breadcrumbItems = buildBreadcrumbs([
    { name: t("common.home"), path: "/" },
    { name: t("common.askAbe"), path: "/questions" },
  ]);

  /**
   * Build the category list from the category data source
   * and include any category that exists on a question but
   * is not yet present inside categories.ts.
   */
  const allCategories = useMemo(() => {
    const categoryNames = new Set(
      categoryOptions.map((category) => category.name),
    );

    questions.forEach((question) => {
      if (question.category) {
        categoryNames.add(question.category);
      }
    });

    return Array.from(categoryNames);
  }, []);

  /**
   * Filter questions based on:
   * 1. Search query
   * 2. Selected category
   *
   * Both filters must match when both are active.
   */
  const filteredQuestions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return questions.filter((question) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        question.title.toLowerCase().includes(normalizedSearch) ||
        question.category?.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "all" || question.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="bg-white">
      <BreadcrumbSchema items={breadcrumbItems} />

      <Container className="py-8 sm:py-10 lg:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            {
              label: t("common.home"),
              href: "/",
            },
            {
              label: t("common.askAbe"),
            },
          ]}
        />

        {/* Page Introduction */}
        <section className="mt-7 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {t("askAbe.title")}
          </h1>

          <p className="mt-3 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {t("askAbe.subtitle")}
          </p>
        </section>

        {/* Search + Category Filter */}
        <section className="mt-7">
          <QuestionFilters
            search={search}
            category={category}
            categories={allCategories}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
          />
        </section>

        {/* Question Directory */}
        <section className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[230px_minmax(0,1fr)]">
            {/* Categories */}
            <CategorySidebar
              categories={allCategories}
              activeCategory={category}
              onCategoryChange={setCategory}
              className="border-b border-slate-200 md:border-b-0 md:border-r"
            />

            {/* Questions */}
            <QuestionList
              questions={filteredQuestions}
              initialLimit={8}
            />
          </div>
        </section>
      </Container>
    </div>
  );
}