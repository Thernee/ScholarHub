-- CreateTable
CREATE TABLE "users" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationality" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "schools" (
    "schoolId" SERIAL NOT NULL,
    "schoolName" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "institutionalControl" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "acceptanceRate" DECIMAL(8,2) NOT NULL,
    "schoolWebsite" TEXT NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("schoolId")
);

-- CreateTable
CREATE TABLE "SchoolCriteria" (
    "criteriaId" SERIAL NOT NULL,
    "graduateLevel" TEXT NOT NULL DEFAULT 'Masters/PhD',
    "offerScholarships" BOOLEAN NOT NULL DEFAULT false,
    "requiresAppFee" BOOLEAN NOT NULL DEFAULT true,
    "requiresGre" BOOLEAN NOT NULL DEFAULT false,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "SchoolCriteria_pkey" PRIMARY KEY ("criteriaId")
);

-- CreateTable
CREATE TABLE "Scholarships" (
    "schpolarshipId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "degreeLevel" TEXT NOT NULL,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "Scholarships_pkey" PRIMARY KEY ("schpolarshipId")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "schools_state_city_idx" ON "schools"("state", "city");

-- CreateIndex
CREATE INDEX "schools_rank_idx" ON "schools"("rank");

-- CreateIndex
CREATE INDEX "schools_institutionalControl_idx" ON "schools"("institutionalControl");

-- CreateIndex
CREATE INDEX "SchoolCriteria_graduateLevel_idx" ON "SchoolCriteria"("graduateLevel");

-- AddForeignKey
ALTER TABLE "SchoolCriteria" ADD CONSTRAINT "SchoolCriteria_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "schools"("schoolId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scholarships" ADD CONSTRAINT "Scholarships_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "schools"("schoolId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "schools"("schoolId") ON DELETE RESTRICT ON UPDATE CASCADE;
