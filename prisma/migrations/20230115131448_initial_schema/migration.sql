-- CreateTable
CREATE TABLE "Restaurants" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "address" TEXT,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "restroId" INTEGER NOT NULL,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_restroId_fkey" FOREIGN KEY ("restroId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
