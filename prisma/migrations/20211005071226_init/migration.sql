-- CreateTable
CREATE TABLE "Items" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "memo" TEXT,
    "date" DATE NOT NULL,
    "ogp" TEXT,
    "tags" TEXT[],
    "private" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_url_key" ON "Items"("url");
