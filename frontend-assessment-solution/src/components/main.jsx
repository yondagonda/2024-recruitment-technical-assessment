import React from 'react';

export const Main = () => {
  return (
    <>
      <main className="pl-12 pt-6 w-full pr-32">
        <section className="text-start">
          <h4>DevSoc presents</h4>
          <h1 className="text-blue-500 font-bold text-6xl">unilectives</h1>
          <h3 className="font-bold">
            Your one-stop shop for UNSW course and elective reviews.
          </h3>

          <div className="pt-6">
            <label for="searchBar"></label>
            <input
              id="searchBar"
              type="text"
              placeholder="Search.."
              className="border border-blue-400 rounded-sm w-full"
            />
          </div>
        </section>

        <section className="grid grid-cols-3 pt-12 gap-6">
          <article className="border">blah</article>
          <article className="border">blah</article>
          <article className="border">blah</article>
          <article className="border">blah</article>
          <article className="border">blah</article>
          <article className="border">blah</article>
        </section>
      </main>
    </>
  );
};
