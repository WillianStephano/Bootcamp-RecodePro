using Microsoft.AspNetCore.Mvc;
using projetoCsharp.Model;
using myProject.Repository;
using System.Threading.Tasks;
using System.Linq;

namespace projetoCsharp.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class DestinoController : ControllerBase
   {

      private readonly IDestinoRepository _repository;

      public DestinoController(IDestinoRepository repository)
      {
         _repository = repository;
      }

      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
         var destinos = await _repository.GetDestinos();
         return destinos.Any() ? Ok(destinos) : NoContent();
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetById(int id)
      {
         var destino = await _repository.GetDestinoById(id);
         return destino != null
         ? Ok(destino) : NotFound("destino não encontrado.");
      }

      [HttpPost]
      public async Task<IActionResult> Post(Destino destino)
      {
         _repository.AddDestino(destino);
         return await _repository.SaveChangesAsync()
         ? Ok("Adicionado") : BadRequest("Erro");
      }

      [HttpPut("{id}")]
      public async Task<IActionResult> Atualizar(int id, Destino destino)
      {
         var destinoExiste = await _repository.GetDestinoById(id);
         if (destinoExiste == null) return NotFound("destino não encontrado");

         destinoExiste.Info = destino.Info ?? destinoExiste.Info;
         destinoExiste.Nome = destino.Nome ?? destinoExiste.Nome;

         _repository.AtualizarDestino(destinoExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("atualizado.") : BadRequest("Erro");
      }

      [HttpDelete("{id}")]
      public async Task<IActionResult> Delete(int id)
      {
         var destinoExiste = await _repository.GetDestinoById(id);
         if (destinoExiste == null)
            return NotFound("não encontrado");

         _repository.DeletarDestino(destinoExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("deletado.") : BadRequest("Erro");
      }

   }
}