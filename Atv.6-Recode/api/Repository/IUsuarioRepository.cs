using System.Collections.Generic;
using System.Threading.Tasks;
using projetoCsharp.Model;

namespace myProject.Repository
{
   public interface IUsuarioRepository
   {
      Task<IEnumerable<Usuario>> GetUsuarios();
      Task<Usuario> GetUsuarioById(int id);
      void AddUsuario(Usuario usuario);
      void AtualizarUsuario(Usuario usuario);
      void DeletarUsuario(Usuario usuario);
      Task<bool> SaveChangesAsync();

   }
}