using Microsoft.EntityFrameworkCore;
using projetoCsharp.Model;


namespace projetoCsharp.Database
{
   public class TesteBdContext : DbContext
   {
      public TesteBdContext(DbContextOptions<TesteBdContext>
      options) : base(options)
      {

      }

      public DbSet<Destino> Destinos { get; set; }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
         var destino = modelBuilder.Entity<Destino>();
         destino.ToTable("destino");
         destino.HasKey(x => x.Id);
         destino.Property(x => x.Id).HasColumnName("id_destino").ValueGeneratedOnAdd();
         destino.Property(x => x.Info).HasColumnName("info_destino").IsRequired();
         destino.Property(x => x.Nome).HasColumnName("nome_destino").IsRequired();

      }
   }
}