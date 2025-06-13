using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Trio.HospitalManagement.Data.Mssql.Migrations
{
    /// <inheritdoc />
    public partial class HospitalIndexes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Hospitals",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_IsActive",
                table: "Hospitals",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_IsDeleted",
                table: "Hospitals",
                column: "IsDeleted");

            migrationBuilder.CreateIndex(
                name: "IX_Hospitals_Name",
                table: "Hospitals",
                column: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Hospitals_IsActive",
                table: "Hospitals");

            migrationBuilder.DropIndex(
                name: "IX_Hospitals_IsDeleted",
                table: "Hospitals");

            migrationBuilder.DropIndex(
                name: "IX_Hospitals_Name",
                table: "Hospitals");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Hospitals",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
